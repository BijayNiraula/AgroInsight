from flask import Flask, request, send_file, send_from_directory, jsonify
import os
from ultralytics import YOLO
import cv2

app = Flask(__name__)

# Set the upload folder and annotated folder
UPLOAD_FOLDER = 'uploads'
ANNOTATED_FOLDER = 'annotated_videos'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['ANNOTATED_FOLDER'] = ANNOTATED_FOLDER

# Ensure the upload and annotated folders exist
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(ANNOTATED_FOLDER, exist_ok=True)

# Load YOLOv8 model
model = YOLO('yolov8n.pt')  # You can use yolov8s.pt, yolov8m.pt for different model sizes

# Serve uploaded and annotated videos as static files
@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

@app.route('/annotated_videos/<filename>')
def annotated_video(filename):
    return send_from_directory(app.config['ANNOTATED_FOLDER'], filename)

# Route for uploading video
@app.route('/upload', methods=['POST'])
def upload():
    if 'video' not in request.files:
        return "No video file received", 400

    video = request.files['video']

    if video.filename == '':
        return "No file name", 400

    # Save the uploaded video file with the same filename
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], video.filename)
    video.save(file_path)

    try:
        # Perform YOLOv8 object detection on the uploaded video
        annotated_video_path = process_video_with_yolo(file_path, video.filename)
        
        # Create a public URL for the annotated video
        public_url = f"/annotated_videos/{os.path.basename(annotated_video_path)}"
        
        # Return JSON response with public URL of the annotated video
        return jsonify({"message": "Video processed successfully", "annotated_video_url": public_url})
    
    except Exception as e:
        return f"Error processing video: {str(e)}", 500


def process_video_with_yolo(video_path, filename):
    print(f"Processing video: {filename}")
    # Open the video file
    video = cv2.VideoCapture(video_path)

    if not video.isOpened():
        raise Exception("Error opening video file")

    # Get video properties
    fps = video.get(cv2.CAP_PROP_FPS)
    width = int(video.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(video.get(cv2.CAP_PROP_FRAME_HEIGHT))
    fourcc = cv2.VideoWriter_fourcc(*'mp4v')  # Use 'mp4v' for .mp4 videos

    # Create a unique annotated video filename
    base_filename = os.path.splitext(filename)[0]  # Get the name without extension
    annotated_filename = f'{base_filename}_annotated.mp4'
    
    # Path to save the annotated video
    annotated_path = os.path.join(app.config['ANNOTATED_FOLDER'], annotated_filename)

    # Create VideoWriter to save the annotated video
    out = cv2.VideoWriter(annotated_path, fourcc, fps, (width, height))

    while video.isOpened():
        ret, frame = video.read()
        if not ret:
            break

        # Run YOLOv8 inference on the frame
        results = model(frame)

        # Visualize the results (draw bounding boxes, etc.)
        annotated_frame = results[0].plot()

        # Resize the frame to have a max width of 500px while maintaining aspect ratio
        max_width = 500
        aspect_ratio = height / width
        new_width = max_width
        new_height = int(new_width * aspect_ratio)
        
        resized_frame = cv2.resize(annotated_frame, (new_width, new_height))

        # Display the frame using OpenCV
        cv2.imshow('Annotated Video Frame', resized_frame)

        # Write the annotated frame to the output video
        out.write(annotated_frame)

        # Exit the frame display when 'q' is pressed
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    # Release video objects
    video.release()
    out.release()

    # Close the OpenCV window
    cv2.destroyAllWindows()

    print(f"Annotated video saved at: {annotated_path}")

    return annotated_path

if __name__ == '__main__':
    app.run(port=8000, debug=True)
