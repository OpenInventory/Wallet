export default `@keyframes spinAround {
  from {
    transform: rotate(0deg); }
  to {
    transform: rotate(359deg); } }
.button {
  -moz-appearance: none;
  -webkit-appearance: none;
  align-items: center;
  border: none;
  border-radius: 3px;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
  height: 2.285em;
  justify-content: flex-start;
  line-height: 1.5;
  padding-left: 0.75em;
  padding-right: 0.75em;
  position: relative;
  vertical-align: top;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: white;
  border: 1px solid #dbdbdb;
  color: #363636;
  cursor: pointer;
  justify-content: center;
  padding-left: 0.75em;
  padding-right: 0.75em;
  text-align: center;
  white-space: nowrap; }
  .button:focus, .button.is-focused, .button:active, .button.is-active {
    outline: none; }
  .button[disabled], .button.is-disabled {
    pointer-events: none; }
  .button strong {
    color: inherit; }
  .button .icon:first-child:not(:last-child) {
    margin-left: -0.25rem;
    margin-right: 0.5rem; }
  .button .icon:last-child:not(:first-child) {
    margin-left: 0.5rem;
    margin-right: -0.25rem; }
  .button .icon:first-child:last-child {
    margin-left: calc(-1px + -0.25rem);
    margin-right: calc(-1px + -0.25rem); }
  .button .icon.is-small:first-child:not(:last-child) {
    margin-left: 0rem; }
  .button .icon.is-small:last-child:not(:first-child) {
    margin-right: 0rem; }
  .button .icon.is-small:first-child:last-child {
    margin-left: calc(-1px + 0rem);
    margin-right: calc(-1px + 0rem); }
  .button .icon.is-medium:first-child:not(:last-child) {
    margin-left: -0.5rem; }
  .button .icon.is-medium:last-child:not(:first-child) {
    margin-right: -0.5rem; }
  .button .icon.is-medium:first-child:last-child {
    margin-left: calc(-1px + -0.5rem);
    margin-right: calc(-1px + -0.5rem); }
  .button .icon.is-large:first-child:not(:last-child) {
    margin-left: -1rem; }
  .button .icon.is-large:last-child:not(:first-child) {
    margin-right: -1rem; }
  .button .icon.is-large:first-child:last-child {
    margin-left: calc(-1px + -1rem);
    margin-right: calc(-1px + -1rem); }
  .button:hover, .button.is-hovered {
    border-color: #b5b5b5;
    color: #363636; }
  .button:focus, .button.is-focused {
    border-color: #00d1b2;
    box-shadow: 0 0 0.5em rgba(0, 209, 178, 0.25);
    color: #363636; }
  .button:active, .button.is-active {
    border-color: #4a4a4a;
    box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);
    color: #363636; }
  .button.is-link {
    background-color: transparent;
    border-color: transparent;
    color: #4a4a4a;
    text-decoration: underline; }
    .button.is-link:hover, .button.is-link.is-hovered, .button.is-link:focus, .button.is-link.is-focused, .button.is-link:active, .button.is-link.is-active {
      background-color: whitesmoke;
      color: #363636; }
  .button.is-white {
    background-color: white;
    border-color: transparent;
    color: #0a0a0a; }
    .button.is-white:hover, .button.is-white.is-hovered {
      background-color: #f9f9f9;
      border-color: transparent;
      color: #0a0a0a; }
    .button.is-white:focus, .button.is-white.is-focused {
      border-color: transparent;
      box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.25);
      color: #0a0a0a; }
    .button.is-white:active, .button.is-white.is-active {
      background-color: #f2f2f2;
      border-color: transparent;
      box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);
      color: #0a0a0a; }
    .button.is-white.is-inverted {
      background-color: #0a0a0a;
      color: white; }
      .button.is-white.is-inverted:hover {
        background-color: black; }
    .button.is-white.is-loading:after {
      border-color: transparent transparent #0a0a0a #0a0a0a !important; }
    .button.is-white.is-outlined {
      background-color: transparent;
      border-color: white;
      color: white; }
      .button.is-white.is-outlined:hover, .button.is-white.is-outlined:focus {
        background-color: white;
        border-color: white;
        color: #0a0a0a; }
      .button.is-white.is-outlined.is-loading:after {
        border-color: transparent transparent white white !important; }
    .button.is-white.is-inverted.is-outlined {
      background-color: transparent;
      border-color: #0a0a0a;
      color: #0a0a0a; }
      .button.is-white.is-inverted.is-outlined:hover, .button.is-white.is-inverted.is-outlined:focus {
        background-color: #0a0a0a;
        color: white; }
  .button.is-black {
    background-color: #0a0a0a;
    border-color: transparent;
    color: white; }
    .button.is-black:hover, .button.is-black.is-hovered {
      background-color: #040404;
      border-color: transparent;
      color: white; }
    .button.is-black:focus, .button.is-black.is-focused {
      border-color: transparent;
      box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.25);
      color: white; }
    .button.is-black:active, .button.is-black.is-active {
      background-color: black;
      border-color: transparent;
      box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);
      color: white; }
    .button.is-black.is-inverted {
      background-color: white;
      color: #0a0a0a; }
      .button.is-black.is-inverted:hover {
        background-color: #f2f2f2; }
    .button.is-black.is-loading:after {
      border-color: transparent transparent white white !important; }
    .button.is-black.is-outlined {
      background-color: transparent;
      border-color: #0a0a0a;
      color: #0a0a0a; }
      .button.is-black.is-outlined:hover, .button.is-black.is-outlined:focus {
        background-color: #0a0a0a;
        border-color: #0a0a0a;
        color: white; }
      .button.is-black.is-outlined.is-loading:after {
        border-color: transparent transparent #0a0a0a #0a0a0a !important; }
    .button.is-black.is-inverted.is-outlined {
      background-color: transparent;
      border-color: white;
      color: white; }
      .button.is-black.is-inverted.is-outlined:hover, .button.is-black.is-inverted.is-outlined:focus {
        background-color: white;
        color: #0a0a0a; }
  .button.is-light {
    background-color: whitesmoke;
    border-color: transparent;
    color: #363636; }
    .button.is-light:hover, .button.is-light.is-hovered {
      background-color: #eeeeee;
      border-color: transparent;
      color: #363636; }
    .button.is-light:focus, .button.is-light.is-focused {
      border-color: transparent;
      box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.25);
      color: #363636; }
    .button.is-light:active, .button.is-light.is-active {
      background-color: #e8e8e8;
      border-color: transparent;
      box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);
      color: #363636; }
    .button.is-light.is-inverted {
      background-color: #363636;
      color: whitesmoke; }
      .button.is-light.is-inverted:hover {
        background-color: #292929; }
    .button.is-light.is-loading:after {
      border-color: transparent transparent #363636 #363636 !important; }
    .button.is-light.is-outlined {
      background-color: transparent;
      border-color: whitesmoke;
      color: whitesmoke; }
      .button.is-light.is-outlined:hover, .button.is-light.is-outlined:focus {
        background-color: whitesmoke;
        border-color: whitesmoke;
        color: #363636; }
      .button.is-light.is-outlined.is-loading:after {
        border-color: transparent transparent whitesmoke whitesmoke !important; }
    .button.is-light.is-inverted.is-outlined {
      background-color: transparent;
      border-color: #363636;
      color: #363636; }
      .button.is-light.is-inverted.is-outlined:hover, .button.is-light.is-inverted.is-outlined:focus {
        background-color: #363636;
        color: whitesmoke; }
  .button.is-dark {
    background-color: #363636;
    border-color: transparent;
    color: whitesmoke; }
    .button.is-dark:hover, .button.is-dark.is-hovered {
      background-color: #2f2f2f;
      border-color: transparent;
      color: whitesmoke; }
    .button.is-dark:focus, .button.is-dark.is-focused {
      border-color: transparent;
      box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.25);
      color: whitesmoke; }
    .button.is-dark:active, .button.is-dark.is-active {
      background-color: #292929;
      border-color: transparent;
      box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);
      color: whitesmoke; }
    .button.is-dark.is-inverted {
      background-color: whitesmoke;
      color: #363636; }
      .button.is-dark.is-inverted:hover {
        background-color: #e8e8e8; }
    .button.is-dark.is-loading:after {
      border-color: transparent transparent whitesmoke whitesmoke !important; }
    .button.is-dark.is-outlined {
      background-color: transparent;
      border-color: #363636;
      color: #363636; }
      .button.is-dark.is-outlined:hover, .button.is-dark.is-outlined:focus {
        background-color: #363636;
        border-color: #363636;
        color: whitesmoke; }
      .button.is-dark.is-outlined.is-loading:after {
        border-color: transparent transparent #363636 #363636 !important; }
    .button.is-dark.is-inverted.is-outlined {
      background-color: transparent;
      border-color: whitesmoke;
      color: whitesmoke; }
      .button.is-dark.is-inverted.is-outlined:hover, .button.is-dark.is-inverted.is-outlined:focus {
        background-color: whitesmoke;
        color: #363636; }
  .button.is-primary {
    background-color: #00d1b2;
    border-color: transparent;
    color: #fff; }
    .button.is-primary:hover, .button.is-primary.is-hovered {
      background-color: #00c4a7;
      border-color: transparent;
      color: #fff; }
    .button.is-primary:focus, .button.is-primary.is-focused {
      border-color: transparent;
      box-shadow: 0 0 0.5em rgba(0, 209, 178, 0.25);
      color: #fff; }
    .button.is-primary:active, .button.is-primary.is-active {
      background-color: #00b89c;
      border-color: transparent;
      box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);
      color: #fff; }
    .button.is-primary.is-inverted {
      background-color: #fff;
      color: #00d1b2; }
      .button.is-primary.is-inverted:hover {
        background-color: #f2f2f2; }
    .button.is-primary.is-loading:after {
      border-color: transparent transparent #fff #fff !important; }
    .button.is-primary.is-outlined {
      background-color: transparent;
      border-color: #00d1b2;
      color: #00d1b2; }
      .button.is-primary.is-outlined:hover, .button.is-primary.is-outlined:focus {
        background-color: #00d1b2;
        border-color: #00d1b2;
        color: #fff; }
      .button.is-primary.is-outlined.is-loading:after {
        border-color: transparent transparent #00d1b2 #00d1b2 !important; }
    .button.is-primary.is-inverted.is-outlined {
      background-color: transparent;
      border-color: #fff;
      color: #fff; }
      .button.is-primary.is-inverted.is-outlined:hover, .button.is-primary.is-inverted.is-outlined:focus {
        background-color: #fff;
        color: #00d1b2; }
  .button.is-info {
    background-color: #3273dc;
    border-color: transparent;
    color: #fff; }
    .button.is-info:hover, .button.is-info.is-hovered {
      background-color: #276cda;
      border-color: transparent;
      color: #fff; }
    .button.is-info:focus, .button.is-info.is-focused {
      border-color: transparent;
      box-shadow: 0 0 0.5em rgba(50, 115, 220, 0.25);
      color: #fff; }
    .button.is-info:active, .button.is-info.is-active {
      background-color: #2366d1;
      border-color: transparent;
      box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);
      color: #fff; }
    .button.is-info.is-inverted {
      background-color: #fff;
      color: #3273dc; }
      .button.is-info.is-inverted:hover {
        background-color: #f2f2f2; }
    .button.is-info.is-loading:after {
      border-color: transparent transparent #fff #fff !important; }
    .button.is-info.is-outlined {
      background-color: transparent;
      border-color: #3273dc;
      color: #3273dc; }
      .button.is-info.is-outlined:hover, .button.is-info.is-outlined:focus {
        background-color: #3273dc;
        border-color: #3273dc;
        color: #fff; }
      .button.is-info.is-outlined.is-loading:after {
        border-color: transparent transparent #3273dc #3273dc !important; }
    .button.is-info.is-inverted.is-outlined {
      background-color: transparent;
      border-color: #fff;
      color: #fff; }
      .button.is-info.is-inverted.is-outlined:hover, .button.is-info.is-inverted.is-outlined:focus {
        background-color: #fff;
        color: #3273dc; }
  .button.is-success {
    background-color: #23d160;
    border-color: transparent;
    color: #fff; }
    .button.is-success:hover, .button.is-success.is-hovered {
      background-color: #22c65b;
      border-color: transparent;
      color: #fff; }
    .button.is-success:focus, .button.is-success.is-focused {
      border-color: transparent;
      box-shadow: 0 0 0.5em rgba(35, 209, 96, 0.25);
      color: #fff; }
    .button.is-success:active, .button.is-success.is-active {
      background-color: #20bc56;
      border-color: transparent;
      box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);
      color: #fff; }
    .button.is-success.is-inverted {
      background-color: #fff;
      color: #23d160; }
      .button.is-success.is-inverted:hover {
        background-color: #f2f2f2; }
    .button.is-success.is-loading:after {
      border-color: transparent transparent #fff #fff !important; }
    .button.is-success.is-outlined {
      background-color: transparent;
      border-color: #23d160;
      color: #23d160; }
      .button.is-success.is-outlined:hover, .button.is-success.is-outlined:focus {
        background-color: #23d160;
        border-color: #23d160;
        color: #fff; }
      .button.is-success.is-outlined.is-loading:after {
        border-color: transparent transparent #23d160 #23d160 !important; }
    .button.is-success.is-inverted.is-outlined {
      background-color: transparent;
      border-color: #fff;
      color: #fff; }
      .button.is-success.is-inverted.is-outlined:hover, .button.is-success.is-inverted.is-outlined:focus {
        background-color: #fff;
        color: #23d160; }
  .button.is-warning {
    background-color: #ffdd57;
    border-color: transparent;
    color: rgba(0, 0, 0, 0.7); }
    .button.is-warning:hover, .button.is-warning.is-hovered {
      background-color: #ffdb4a;
      border-color: transparent;
      color: rgba(0, 0, 0, 0.7); }
    .button.is-warning:focus, .button.is-warning.is-focused {
      border-color: transparent;
      box-shadow: 0 0 0.5em rgba(255, 221, 87, 0.25);
      color: rgba(0, 0, 0, 0.7); }
    .button.is-warning:active, .button.is-warning.is-active {
      background-color: #ffd83d;
      border-color: transparent;
      box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);
      color: rgba(0, 0, 0, 0.7); }
    .button.is-warning.is-inverted {
      background-color: rgba(0, 0, 0, 0.7);
      color: #ffdd57; }
      .button.is-warning.is-inverted:hover {
        background-color: rgba(0, 0, 0, 0.7); }
    .button.is-warning.is-loading:after {
      border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important; }
    .button.is-warning.is-outlined {
      background-color: transparent;
      border-color: #ffdd57;
      color: #ffdd57; }
      .button.is-warning.is-outlined:hover, .button.is-warning.is-outlined:focus {
        background-color: #ffdd57;
        border-color: #ffdd57;
        color: rgba(0, 0, 0, 0.7); }
      .button.is-warning.is-outlined.is-loading:after {
        border-color: transparent transparent #ffdd57 #ffdd57 !important; }
    .button.is-warning.is-inverted.is-outlined {
      background-color: transparent;
      border-color: rgba(0, 0, 0, 0.7);
      color: rgba(0, 0, 0, 0.7); }
      .button.is-warning.is-inverted.is-outlined:hover, .button.is-warning.is-inverted.is-outlined:focus {
        background-color: rgba(0, 0, 0, 0.7);
        color: #ffdd57; }
  .button.is-danger {
    background-color: #ff3860;
    border-color: transparent;
    color: #fff; }
    .button.is-danger:hover, .button.is-danger.is-hovered {
      background-color: #ff2b56;
      border-color: transparent;
      color: #fff; }
    .button.is-danger:focus, .button.is-danger.is-focused {
      border-color: transparent;
      box-shadow: 0 0 0.5em rgba(255, 56, 96, 0.25);
      color: #fff; }
    .button.is-danger:active, .button.is-danger.is-active {
      background-color: #ff1f4b;
      border-color: transparent;
      box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);
      color: #fff; }
    .button.is-danger.is-inverted {
      background-color: #fff;
      color: #ff3860; }
      .button.is-danger.is-inverted:hover {
        background-color: #f2f2f2; }
    .button.is-danger.is-loading:after {
      border-color: transparent transparent #fff #fff !important; }
    .button.is-danger.is-outlined {
      background-color: transparent;
      border-color: #ff3860;
      color: #ff3860; }
      .button.is-danger.is-outlined:hover, .button.is-danger.is-outlined:focus {
        background-color: #ff3860;
        border-color: #ff3860;
        color: #fff; }
      .button.is-danger.is-outlined.is-loading:after {
        border-color: transparent transparent #ff3860 #ff3860 !important; }
    .button.is-danger.is-inverted.is-outlined {
      background-color: transparent;
      border-color: #fff;
      color: #fff; }
      .button.is-danger.is-inverted.is-outlined:hover, .button.is-danger.is-inverted.is-outlined:focus {
        background-color: #fff;
        color: #ff3860; }
  .button.is-small {
    border-radius: 2px;
    font-size: 0.75rem; }
    .button.is-small .icon:first-child:not(:last-child) {
      margin-left: -0.375rem;
      margin-right: 0.375rem; }
    .button.is-small .icon:last-child:not(:first-child) {
      margin-left: 0.375rem;
      margin-right: -0.375rem; }
    .button.is-small .icon:first-child:last-child {
      margin-left: calc(-1px + -0.375rem);
      margin-right: calc(-1px + -0.375rem); }
    .button.is-small .icon.is-small:first-child:not(:last-child) {
      margin-left: -0.125rem; }
    .button.is-small .icon.is-small:last-child:not(:first-child) {
      margin-right: -0.125rem; }
    .button.is-small .icon.is-small:first-child:last-child {
      margin-left: calc(-1px + -0.125rem);
      margin-right: calc(-1px + -0.125rem); }
    .button.is-small .icon.is-medium:first-child:not(:last-child) {
      margin-left: -0.625rem; }
    .button.is-small .icon.is-medium:last-child:not(:first-child) {
      margin-right: -0.625rem; }
    .button.is-small .icon.is-medium:first-child:last-child {
      margin-left: calc(-1px + -0.625rem);
      margin-right: calc(-1px + -0.625rem); }
    .button.is-small .icon.is-large:first-child:not(:last-child) {
      margin-left: -1.125rem; }
    .button.is-small .icon.is-large:last-child:not(:first-child) {
      margin-right: -1.125rem; }
    .button.is-small .icon.is-large:first-child:last-child {
      margin-left: calc(-1px + -1.125rem);
      margin-right: calc(-1px + -1.125rem); }
  .button.is-medium {
    font-size: 1.25rem; }
    .button.is-medium .icon:first-child:not(:last-child) {
      margin-left: -0.125rem;
      margin-right: 0.625rem; }
    .button.is-medium .icon:last-child:not(:first-child) {
      margin-left: 0.625rem;
      margin-right: -0.125rem; }
    .button.is-medium .icon:first-child:last-child {
      margin-left: calc(-1px + -0.125rem);
      margin-right: calc(-1px + -0.125rem); }
    .button.is-medium .icon.is-small:first-child:not(:last-child) {
      margin-left: 0.125rem; }
    .button.is-medium .icon.is-small:last-child:not(:first-child) {
      margin-right: 0.125rem; }
    .button.is-medium .icon.is-small:first-child:last-child {
      margin-left: calc(-1px + 0.125rem);
      margin-right: calc(-1px + 0.125rem); }
    .button.is-medium .icon.is-medium:first-child:not(:last-child) {
      margin-left: -0.375rem; }
    .button.is-medium .icon.is-medium:last-child:not(:first-child) {
      margin-right: -0.375rem; }
    .button.is-medium .icon.is-medium:first-child:last-child {
      margin-left: calc(-1px + -0.375rem);
      margin-right: calc(-1px + -0.375rem); }
    .button.is-medium .icon.is-large:first-child:not(:last-child) {
      margin-left: -0.875rem; }
    .button.is-medium .icon.is-large:last-child:not(:first-child) {
      margin-right: -0.875rem; }
    .button.is-medium .icon.is-large:first-child:last-child {
      margin-left: calc(-1px + -0.875rem);
      margin-right: calc(-1px + -0.875rem); }
  .button.is-large {
    font-size: 1.5rem; }
    .button.is-large .icon:first-child:not(:last-child) {
      margin-left: 0rem;
      margin-right: 0.75rem; }
    .button.is-large .icon:last-child:not(:first-child) {
      margin-left: 0.75rem;
      margin-right: 0rem; }
    .button.is-large .icon:first-child:last-child {
      margin-left: calc(-1px + 0rem);
      margin-right: calc(-1px + 0rem); }
    .button.is-large .icon.is-small:first-child:not(:last-child) {
      margin-left: 0.25rem; }
    .button.is-large .icon.is-small:last-child:not(:first-child) {
      margin-right: 0.25rem; }
    .button.is-large .icon.is-small:first-child:last-child {
      margin-left: calc(-1px + 0.25rem);
      margin-right: calc(-1px + 0.25rem); }
    .button.is-large .icon.is-medium:first-child:not(:last-child) {
      margin-left: -0.25rem; }
    .button.is-large .icon.is-medium:last-child:not(:first-child) {
      margin-right: -0.25rem; }
    .button.is-large .icon.is-medium:first-child:last-child {
      margin-left: calc(-1px + -0.25rem);
      margin-right: calc(-1px + -0.25rem); }
    .button.is-large .icon.is-large:first-child:not(:last-child) {
      margin-left: -0.75rem; }
    .button.is-large .icon.is-large:last-child:not(:first-child) {
      margin-right: -0.75rem; }
    .button.is-large .icon.is-large:first-child:last-child {
      margin-left: calc(-1px + -0.75rem);
      margin-right: calc(-1px + -0.75rem); }
  .button[disabled], .button.is-disabled {
    opacity: 0.5; }
  .button.is-fullwidth {
    display: flex;
    width: 100%; }
  .button.is-loading {
    color: transparent !important;
    pointer-events: none; }
    .button.is-loading:after {
      animation: spinAround 500ms infinite linear;
      border: 2px solid #dbdbdb;
      border-radius: 290486px;
      border-right-color: transparent;
      border-top-color: transparent;
      content: "";
      display: block;
      height: 1rem;
      position: relative;
      width: 1rem;
      left: 50%;
      margin-left: -8px;
      margin-top: -8px;
      position: absolute;
      top: 50%;
      position: absolute !important; }
`
