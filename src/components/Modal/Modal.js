// import { Component } from "react";

// import PropTypes from "prop-types";

// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener("keydown", this.handleKeydown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("keydown", this.handleKeydown);
//   }

//   handleKeydown = (evt) => {
//     if (evt.code === "Escape") {
//       this.props.onToggle();
//     }
//   };

//   handleBackdropClick = (evt) => {
//     if (evt.currentTarget === evt.target) {
//       this.props.onToggle();
//     }
//   };

//   render() {
//     return (
//       <div onClick={this.handleBackdropClick}>
//         <div>{this.props.children}</div>
//       </div>
//     );
//   }
// }
// export default Modal;

// Modal.propTypes = {
//   onToggle: PropTypes.func.isRequired,
// };