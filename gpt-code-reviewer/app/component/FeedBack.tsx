interface Props {
    feedBack: string
}

export default function FeedBack({ feedBack }: Props) {
    const processedFeedBack = feedBack.split(":")[1];
    return <div>
        {feedBack}
    </div>
}