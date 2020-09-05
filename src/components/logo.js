import React from "react"
import { Link } from "gatsby"
import { GrOrganization } from "react-icons/cg";

const Logo = (props) => (
  <div className="site-logo">
    <Link to="/"><span><GrOrganization/></span>{props.title}</Link>
  </div>
)

export default Logo

