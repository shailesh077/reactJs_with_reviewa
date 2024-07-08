export const setSubmission = (newSubmission) => {
    const submissions = JSON.parse(localStorage.getItem('submissions')) || [];
    submissions.push(newSubmission);
    localStorage.setItem('submissions', JSON.stringify(submissions));
};

export const getSubmissions = () => {
    return JSON.parse(localStorage.getItem('submissions')) || [];
};