import React from 'react'
import Model from './Model'
import NavPill from './NavPill'
import TabPanes from './TabPanes'

export default function Container() {
  return (
    <div className="row">
    <div className="col-md-8">
        <NavPill/>
      <div className="well">
        {/* Tab panes */}
        <TabPanes/>
      </div>
    </div>
    <div className="col-md-4">
      <Model/>
    </div>
  </div>
  )
}
