import IStorys from "@/src/interfaces/IStories";
import StoryCard from "../StoryCard";
import { View } from "native-base";

interface StoriesViewedProps {
  stories: IStorys[]
}

export default function Stories({stories}: StoriesViewedProps) {
  return (
    <View style={{marginHorizontal: 13}}>
    {
        stories?.map((story: IStorys, i: any)=> (
          <StoryCard 
          key={i}
          name={story.name}
          time={story.time}
          amountStory={story.amountStory}
          icon={story.icon}
          isViewed={story.isViewed}
          />
        ))
      }
    </View>
  )
}