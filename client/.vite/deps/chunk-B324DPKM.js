import {
  require_jsx_runtime
} from "./chunk-DMZXRQ7W.js";
import {
  require_prop_types
} from "./chunk-T5IRCJ6S.js";
import {
  __toESM,
  require_react
} from "./chunk-AK4TLUUY.js";

// node_modules/@mui/lab/TabContext/TabContext.js
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var Context = React.createContext(null);
if (true) {
  Context.displayName = "TabContext";
}
function useUniquePrefix() {
  const [id, setId] = React.useState(null);
  React.useEffect(() => {
    setId(`mui-p-${Math.round(Math.random() * 1e5)}`);
  }, []);
  return id;
}
function TabContext(props) {
  const {
    children,
    value
  } = props;
  const idPrefix = useUniquePrefix();
  const context = React.useMemo(() => {
    return {
      idPrefix,
      value
    };
  }, [idPrefix, value]);
  return (0, import_jsx_runtime.jsx)(Context.Provider, {
    value: context,
    children
  });
}
true ? TabContext.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types.default.node,
  /**
   * The value of the currently selected `Tab`.
   */
  value: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string]).isRequired
} : void 0;
function useTabContext() {
  return React.useContext(Context);
}
function getPanelId(context, value) {
  const {
    idPrefix
  } = context;
  if (idPrefix === null) {
    return null;
  }
  return `${context.idPrefix}-P-${value}`;
}
function getTabId(context, value) {
  const {
    idPrefix
  } = context;
  if (idPrefix === null) {
    return null;
  }
  return `${context.idPrefix}-T-${value}`;
}

export {
  TabContext,
  useTabContext,
  getPanelId,
  getTabId
};
//# sourceMappingURL=chunk-B324DPKM.js.map
