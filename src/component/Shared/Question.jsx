import PropTypes from "prop-types";
import { Radio, Input, Select, Checkbox } from "antd";

const Question = ({ question, index, answers, handleChange }) => {
  const currentAnswer = answers[index];

  return (
    <div className="mb-6">
      <p className="font-semibold">{question.question}</p>

      {question.type === "radio" && (
        <Radio.Group
          onChange={(e) => handleChange(index, e.target.value)}
          value={currentAnswer?.value || null}
          className="flex flex-col mt-2 custom-radio"
        >
          {question.options.map((opt, i) => (
            <Radio key={i} value={opt.value || opt}>
              {opt.label || opt}
            </Radio>
          ))}
        </Radio.Group>
      )}

      {question.type === "select" && (
        <Select
          placeholder={question.placeholder}
          value={currentAnswer?.value || undefined}
          onChange={(val) => handleChange(index, val)}
          style={{ width: 250, marginTop: 8 }}
        >
          {question.options.map((opt, i) => (
            <Select.Option key={i} value={opt.value || opt}>
              {opt.label || opt}
            </Select.Option>
          ))}
        </Select>
      )}

      {question.type === "checkbox" && (
        <Checkbox.Group
          options={question.options.map((opt) =>
            typeof opt === "string" ? opt : opt.label
          )}
          value={currentAnswer?.value || []}
          onChange={(vals) => handleChange(index, vals)}
          className="mt-2"
        />
      )}

      {question.type === "text" && (
        <Input
          placeholder={question.placeholder}
          value={currentAnswer?.value || ""}
          onChange={(e) => handleChange(index, e.target.value)}
          className="mt-2"
        />
      )}

      {question.type === "number" && (
        <Input
          type="number"
          placeholder={question.placeholder}
          value={currentAnswer?.value || ""}
          onChange={(e) => handleChange(index, e.target.value)}
          className="mt-2"
        />
      )}

      {/* Conditional Input */}
      {question.conditionalInput &&
        (() => {
          const triggeredCI = question.conditionalInput[currentAnswer?.value];
          if (!triggeredCI) return null;

          const ci = triggeredCI;

          return (
            <div className="mt-3">
              <p className="font-medium mb-2">{ci.label}</p>

              {ci.type === "text" || ci.type === "number" ? (
                <Input
                  type={ci.type}
                  placeholder={ci.placeholder}
                  value={currentAnswer?.[ci.key] || ""}
                  onChange={(e) => handleChange(index, e.target.value, ci.key)}
                  className="w-full max-w-[250px]"
                />
              ) : ci.type === "select" ? (
                <Select
                  placeholder={ci.placeholder || "Select"}
                  value={currentAnswer?.[ci.key] || undefined}
                  onChange={(val) => handleChange(index, val, ci.key)}
                  style={{ width: 250 }}
                >
                  {ci.options.map((opt, i) => (
                    <Select.Option
                      key={i}
                      value={typeof opt === "string" ? opt : opt.value}
                    >
                      {typeof opt === "string" ? opt : opt.label}
                    </Select.Option>
                  ))}
                </Select>
              ) : ci.type === "radio" ? (
                <Radio.Group
                  onChange={(e) => handleChange(index, e.target.value, ci.key)}
                  value={currentAnswer?.[ci.key] || null}
                  className="flex flex-col mt-2 custom-radio"
                >
                  {ci.options.map((opt, i) => (
                    <Radio key={i} value={opt.value || opt}>
                      {opt.label || opt}
                    </Radio>
                  ))}
                </Radio.Group>
              ) : ci.type === "checkbox" ? (
                <Checkbox.Group
                  options={ci.options.map((opt) =>
                    typeof opt === "string" ? opt : opt.label
                  )}
                  value={currentAnswer?.[ci.key] || []}
                  onChange={(vals) => handleChange(index, vals, ci.key)}
                />
              ) : null}
            </div>
          );
        })()}
    </div>
  );
};

// PropTypes validation
Question.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["radio", "checkbox", "select", "text", "number"])
      .isRequired,
    options: PropTypes.array,
    placeholder: PropTypes.string,
    conditionalInput: PropTypes.shape({
      when: PropTypes.any.isRequired,
      type: PropTypes.oneOf(["radio", "checkbox", "select", "text", "number"])
        .isRequired,
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      options: PropTypes.array,
      placeholder: PropTypes.string,
    }),
  }).isRequired,
  index: PropTypes.number.isRequired,
  answers: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Question;
