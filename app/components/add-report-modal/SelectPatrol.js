import { Dropdown } from "flowbite-react"

function SelectPatrol() {
  return (
    <div className="flex  my-3 font-semibold text-sm items-center gap-x-3" >  
اختر الدورية
:
        <Dropdown renderTrigger={() => <div className=" flex items-center w-44 gap-x-3 p-2 rounded-lg">
            اختر الدورية
            <svg  className="w-4 h-4" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg>


        </div>}   dismissOnClick={false}>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
  )
}

export default SelectPatrol