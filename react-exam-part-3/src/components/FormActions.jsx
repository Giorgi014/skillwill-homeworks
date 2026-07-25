import { memo } from "react";
import "./FormActions.css";

export const FormActions = memo(({ onCancel, submitting }) => {
  return (
    <div className="form_actions">
      <button
        type="submit"
        className="form_actions_cancel"
        onClick={onCancel}
        disabled={submitting}
      >
        გაუქმება
      </button>

      <button
        type="submit"
        className="form_actions_submit"
        disabled={submitting}
      >
        {submitting ? "ინახება..." : "კურსი დაემატა"}
      </button>
    </div>
  );
});

FormActions.displayName = "FormActions";
