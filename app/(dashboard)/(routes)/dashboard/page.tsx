import { UserButton } from "@clerk/nextjs"

function DashboardPage(){
    return(
      <div>
        <p>DASHBOARD Page (protected)</p>
        <UserButton afterSignOutUrl="/"/>
      </div>
    )
}

export default DashboardPage