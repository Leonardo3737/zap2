import IStorys from "@/src/interfaces/IStories";
import StoryCard from "../StoryCard";
import { View } from "native-base";
import ICall from "@/src/interfaces/ICall";
import CallCard from "../CallCard";

interface StoriesViewedProps {
  call: ICall[]
}

export default function Calls({call}: StoriesViewedProps) {
  return (
    <View style={{marginHorizontal: 13}}>
    {
        call?.map((call: ICall, i: any)=> (
          <CallCard 
          key={i}
          name={call.name}
          time={call.time}
          me={call.me}
          icon={call.icon}
          isViewed={call.isViewed}
          type={call.type}
          />
        ))
      }
    </View>
  )
}