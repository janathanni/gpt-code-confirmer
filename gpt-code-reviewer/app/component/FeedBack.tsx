interface Props {
    feedBack: string
}

export default function FeedBack({ feedBack }: Props) {
    return( 
    <div className="feedback-container">
        {`${feedBack}`}
    </div>
    );
}