import React from 'react';
import PropTypes from 'prop-types';
// import IconFont from '@/components/IconFont';

import './index.less';

class FloatInput extends React.Component {
  static propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    // visibleToggle: PropTypes.bool,
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    // disabled: PropTypes.bool,
    // pureNum: PropTypes.bool,
  };

  static defaultProps = {
    label: '',
    // visibleToggle: false,
    type: 'text',
    // disabled: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      dataValueLength: 0,
      // isShow: false,
    };
  }

  handleNumberChange = e => {
    const that = this;
    // const { pureNum } = that.props;

    that.setState(
      {
        dataValueLength: e.target.value.length,
        // inputValue: pureNum ? e.target.value.substring(0, 6) : e.target.value,
        inputValue: e.target.value,
      },
      () => {
        that.triggerChange();
      }
    );
  };

  triggerChange = () => {
    const that = this;
    const { inputValue } = that.state;
    const { onChange } = that.props;

    if (onChange) {
      onChange(inputValue);
    }
  };

  render() {
    const that = this;
    const { dataValueLength, inputValue } = that.state;
    const { label, type, className } = that.props;
    // const onClick = () => {
    //   that.setState({
    //     isShow: !isShow,
    //   });
    // };

    return (
      <div className="control">
        <input
          // type={isShow ? 'text' : type}
          type={type}
          className={`input ${className}`}
          onChange={that.handleNumberChange}
          data-value={dataValueLength}
          // disabled={disabled}
          value={inputValue}
        />
        <label htmlFor="" className="label">
          {label}
        </label>
        {/* {visibleToggle ? (
          <IconFont className={styles.visible} type={isShow ? 'iconvisible' : 'iconinvisible'} onClick={onClick} />
        ) : null} */}
      </div>
    );
  }
}

export default FloatInput;
