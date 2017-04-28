import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import { update } from "../../redux/actions";

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: "notification-idle",
      timer: null
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.notification) {
      this.open();
    }
  }
  render() {
    // create class
    const cls = classNames(
      {
        notification: true,
        notify: true,
        "is-danger": true
      },
      this.state.stage
    );
    return (
      <div
        className={cls}
        style={{ position: "absolute", textAlign: "center" }}
      >
        <button onClick={() => this.close()} className="delete" />
        {this.props.notification}
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
           animation-duration: 0.5s;
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
      if (this.state.stage === "notification-opening") {
        this.close();
      }
    }, 4000);
    this.setState({ stage: "notification-opening", timer });
  }
  close() {
    clearTimeout(this.state.timer);
    this.props.onClose();
    this.setState({ stage: "notification-idle" });
  }
}

const mapStateToProps = state => state;

const NotificationContainer = connect(mapStateToProps, {
  onClose: () => update({ notification: "" })
})(Notification);

export default NotificationContainer;
