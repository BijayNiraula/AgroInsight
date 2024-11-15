// Use DBML to define your database structure
// Docs: https://dbml.dbdiagram.io/docs

TABLE "user" {
  "id" serial
  "email" varchar(40)
  "password" varchar(40)
  "isVerified" boolean
  "otp" int 
  "otpGeneratedAt" bigint
  "updatedAt" bigint
  "createdAt" bigint
}

TABLE "scanGroup" {
  "id" serial 
  "userId" int
  "totalScanCycle" int
  "fieldLocation" bigint
  "title" varchar(40)
  "createdAt" bigint
  "updatedAt" bigint
}

TABLE "scan" {
  "id" serial 
  "userId" int
  "groupId" int
  "detectedDisease" jsonb
  "detectedPests" jsonb
  "scanCycle" int
  "createdAt" bigint
  "updatedAt" bigint
}

Ref: "user"."id" < "scanGroup"."userId"
Ref: "scanGroup"."id" < "scan"."groupId"
Ref: "user"."id" < "scan"."userId"
