const Videos = (req, res) => {
    res.status(200).json({
        intro: "https://youtu.be/NJ8QiIJoq3A",
        dji_opus: "https://youtu.be/9ZKebXCb-24"
    })
}

export default Videos;