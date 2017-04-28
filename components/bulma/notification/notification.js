import React from 'react';
import classNames from 'classnames';

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 'notification-idle',
      timer: null,
    };
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.children)
    if (nextProps.children) {
      this.open();
    }
  }
  render() {
    // create class
    const cls = classNames({
      'notification': true,
      'notify': true,
      'is-primary': this.props.isPrimary,
      'is-info': this.props.isInfo,
      'is-success': this.props.isSuccess,
      'is-warning': this.props.isWarning,
      'is-danger': this.props.isDanger,
    },
      this.state.stage,
      this.props.notificationType,
    );
    return (
      <div className={cls}>
        <button
          onClick={() => this.close()}
          className="delete"
        />
        {this.props.children}
        <style jsx global>{`
          .notify {
            position: absolute;
            width: 300px;
            top: 55px;
            left: 50%;
            margin-left: -150px;
            z-index: 10;
          }

          .notification-idle {
            opacity: 0;
            visibility: hidden;
          }

         .notification-opening {
           animation-duration: 1s;
           animation-name: fadein;
         }

         @keyframes fadein {
           from {
             opacity: 0;
           }

           to {
             opacity: 1;
           }
         }
        `}</style>
      </div>
    );
  }
  open() {
    clearTimeout(this.state.timer);
    const timer = setTimeout(() => {
      if (this.state.stage === 'notification-opening') {
        this.close();
      }
    }, 4000);
    this.setState({ stage: 'notification-opening', timer });
  }
  close() {
    clearTimeout(this.state.timer);
    this.props.onClose();
    this.setState({ stage: 'notification-idle' });
  }
}

export default Notification;
