export const pingController = async(req, res) => {
    try {
        res.status(200).json('Hello');
    } catch (error) {
        res.status(404).json('Error');
    }
}