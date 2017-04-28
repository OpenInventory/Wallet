import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';
import {
  toUppercase,
} from '../../../utils';

const Select = ({
  isSmall,
  isMedium,
  isLarge,
  title,
  options,
  loading,
  style,
  onChange,
  disabled,
  value,
  ...props,
}) => {
  const className = classNames({
    'select': true,
    'is-small': isSmall,
    'is-medium': isMedium,
    'is-large': isLarge,
  }, commonClasses(props));
  const selectTitle = <option style={{ fontSize: 16 }} disabled value="title">{title || ''}</option>;
  return (
    <span
      className={className}
      style={style}
    >
      <select
        value={value || 'title'}
        style={{ fontSize: 16 }}
        onChange={event => onChange(event.target.value)}
        disabled={disabled}
      >
        {selectTitle}
        {
          options
          ? options.map((option) => {
            if (option.title) {
              return (
                <optgroup key={option.title} label={toUppercase(option.title)}>
                  {option.options.map(
                    opt => (
                      <option
                        key={opt}
                        value={opt}
                        style={{ fontSize: 16 }}
                      >
                        {toUppercase(opt)}
                      </option>
                    ),
                  )}
                </optgroup>
              );
            }
            return (
              <option
                key={option}
                value={option}
                style={{ fontSize: 16 }}
              >
                {toUppercase(option)}
              </option>
            );
          })
          : null
        }
      </select>
    </span>
  );
};

Select.defaultProps = {
  onChange: () => {},
};

export default Select;
