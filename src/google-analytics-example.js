// Create GA component

// import React, { Component, PropTypes } from "react"
// import ga from "react-google-analytics"
//
// const GoogleAnalyticsInitiailizer = ga.Initializer
//
// const isProduction = process.env.NODE_ENV === "production"
// const isClient = typeof window !== "undefined"
//
// export default class GoogleAnalyticsTracker extends Component {
//
//   static propTypes = {
//     children: PropTypes.node,
//   };
//
//   static contextTypes = {
//     metadata: PropTypes.object.isRequired,
//   };
//
//   componentWillMount() {
//     if (isClient) {
//       const { pkg } = this.context.metadata
//       if (isProduction) {
//         ga("create", pkg.googleAnalyticsUA, "auto")
//       }
//       else {
//         /*eslint-disable no-console*/
//         console.info("ga.create", pkg.googleAnalyticsUA)
//         /*eslint-enable no-console*/
//       }
//       this.logPageview()
//     }
//   }
//
//   logPageview() {
//     if (isClient) {
//       if (isProduction) {
//         ga("set", "page", window.location.pathname)
//         ga("send", "pageview")
//       }
//       else {
//         /*eslint-disable no-console*/
//         console.info("New pageview", window.location.href)
//         /*eslint-enable no-console*/
//       }
//     }
//   }
//
//   render() {
//     return (
//       <div>
//         { this.props.children }
//         <GoogleAnalyticsInitiailizer />
//       </div>
//     )
//   }
// }




// ...Then wrap whole AppContainer in it.

// const AppContainer = (props) => (
//   <GoogleAnalyticsTracker>
//     <Container>
//       <DefaultHeadMeta />
//       <Content>
//         { props.children }
//       </Content>
//     </Container>
//   </GoogleAnalyticsTracker>
// )
