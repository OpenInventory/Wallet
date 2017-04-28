export default `
@keyframes spinAround {
  from {
    transform: rotate(0deg); }
  to {
    transform: rotate(359deg); } }
.content {
  color: #4a4a4a; }
  .content:not(:last-child) {
    margin-bottom: 1.5rem; }
  .content li + li {
    margin-top: 0.25em; }
  .content p:not(:last-child),
  .content ol:not(:last-child),
  .content ul:not(:last-child),
  .content blockquote:not(:last-child),
  .content table:not(:last-child) {
    margin-bottom: 1em; }
  .content h1,
  .content h2,
  .content h3,
  .content h4,
  .content h5,
  .content h6 {
    color: #363636;
    font-weight: 400;
    line-height: 1.125; }
  .content h1 {
    font-size: 2em;
    margin-bottom: 0.5em; }
    .content h1:not(:first-child) {
      margin-top: 1em; }
  .content h2 {
    font-size: 1.75em;
    margin-bottom: 0.5714em; }
    .content h2:not(:first-child) {
      margin-top: 1.1428em; }
  .content h3 {
    font-size: 1.5em;
    margin-bottom: 0.6666em; }
    .content h3:not(:first-child) {
      margin-top: 1.3333em; }
  .content h4 {
    font-size: 1.25em;
    margin-bottom: 0.8em; }
  .content h5 {
    font-size: 1.125em;
    margin-bottom: 0.8888em; }
  .content h6 {
    font-size: 1em;
    margin-bottom: 1em; }
  .content blockquote {
    background-color: whitesmoke;
    border-left: 5px solid #dbdbdb;
    padding: 1.25em 1.5em; }
  .content ol {
    list-style: decimal outside;
    margin-left: 2em;
    margin-right: 2em;
    margin-top: 1em; }
  .content ul {
    list-style: disc outside;
    margin-left: 2em;
    margin-right: 2em;
    margin-top: 1em; }
    .content ul ul {
      list-style-type: circle;
      margin-top: 0.5em; }
      .content ul ul ul {
        list-style-type: square; }
  .content table {
    width: 100%; }
    .content table td,
    .content table th {
      border: 1px solid #dbdbdb;
      border-width: 0 0 1px;
      padding: 0.5em 0.75em;
      vertical-align: top; }
    .content table th {
      color: #363636;
      text-align: left; }
    .content table tr:hover {
      background-color: whitesmoke; }
    .content table thead td,
    .content table thead th {
      border-width: 0 0 2px;
      color: #363636; }
    .content table tfoot td,
    .content table tfoot th {
      border-width: 2px 0 0;
      color: #363636; }
    .content table tbody tr:last-child td,
    .content table tbody tr:last-child th {
      border-bottom-width: 0; }
  .content.is-small {
    font-size: 0.75rem; }
  .content.is-medium {
    font-size: 1.25rem; }
  .content.is-large {
    font-size: 1.5rem; }
`
