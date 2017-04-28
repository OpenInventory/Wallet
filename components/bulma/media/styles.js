export default `
@keyframes spinAround {
  from {
    transform: rotate(0deg); }
  to {
    transform: rotate(359deg); } }
.media-left,
.media-right {
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0; }

.media-left {
  margin-right: 1rem; }

.media-right {
  margin-left: 1rem; }

.media-content {
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 1;
  text-align: left; }

.media {
  align-items: flex-start;
  display: flex;
  text-align: left; }
  .media .content:not(:last-child) {
    margin-bottom: 0.75rem; }
  .media .media {
    border-top: 1px solid rgba(219, 219, 219, 0.5);
    display: flex;
    padding-top: 0.75rem; }
    .media .media .content:not(:last-child),
    .media .media .control:not(:last-child) {
      margin-bottom: 0.5rem; }
    .media .media .media {
      padding-top: 0.5rem; }
      .media .media .media + .media {
        margin-top: 0.5rem; }
  .media + .media {
    border-top: 1px solid rgba(219, 219, 219, 0.5);
    margin-top: 1rem;
    padding-top: 1rem; }
  .media.is-large + .media {
    margin-top: 1.5rem;
    padding-top: 1.5rem; }
`
