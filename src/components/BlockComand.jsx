import React from 'react'

export default function BlockComand(props) {
  return (
    <div className="bg-gray-600 p-4 rounded-md my-8">
        <div className="flex items-center">
            <span className="text-green-400 mr-2">$</span>
            <span className="text-white">{props.comando}</span>
        </div>
        <div className="ml-6 text-gray-400">{props.resultado}</div>
    </div>
  )
}
