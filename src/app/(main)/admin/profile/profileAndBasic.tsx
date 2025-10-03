import Timeline from "./timeline/page";
import ProfileCard from "./profileCard";




export default function ProfileAndTimeline() {
    return (
        <>
            <div className="bg-blue-00 h-auto w-full flex justify-between">
                <ProfileCard />
                <Timeline />
            </div>
        </>
    )
}