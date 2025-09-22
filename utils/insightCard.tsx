import { UserCircle } from "phosphor-react"



export default function InsightCard() {

    const insightdata = [{
        title: "Active Department Today",
        count: "IT - 85 users",
        icon: <UserCircle size={32} weight="fill" />
    },
    {
        title: "Least Active Department",
        count: "Marketing- 85 users",
        icon: <UserCircle size={32} weight="fill" />
    },
    {
        title: "Top Active Users",
        count: "5 users",
        icon: <UserCircle size={32} weight="fill" />
    },
    ]

    return (
        <>
            {insightdata.map((item) => (
                <div className="h-37 w-44 bg-[#EAEAEA] rounded-lg text-black p-2 flex flex-col" key={item.title}>
                    <div className="bg-red-00 h-[50%] flex items-center justify-center">
                        <div className="bg-[#D9D9D9] rounded-full h-15 w-15 flex items-center justify-center">
                            {item.icon}
                        </div>
                    </div>
                    <div className="h-[50%] flex flex-col justify-center text-center">
                        <h3 className="text-xs text-[#323232] font-regular">{item.title}</h3>
                        <p className="text-[#946FF0] font-semibold text-xs">{item.count}</p>
                    </div>
                </div>
            ))}
        </>
    )
}