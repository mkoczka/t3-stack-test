import { createReactEditorJS } from "react-editor-js";

const DocumentationEditor = () => {
  const ReactEditorJS = createReactEditorJS();

  return (
    <div>
      <ReactEditorJS minHeight={100} />
    </div>
  );
};

export default DocumentationEditor;
