const editorEnvValue = import.meta.env.VITE_ENABLE_EDITOR

export const isEditorEnabled =
  editorEnvValue === 'true' || (import.meta.env.DEV && editorEnvValue !== 'false')
