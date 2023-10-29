const isBlank = (data) => data === undefined || data === null;

const apiResponse = ({ status, message, data }) => {
  const response = {
    status,
  };

  if (!isBlank(message)) {
    response.message = message;
  }

  if (!isBlank(data)) {
    response.data = data;
  }

  return response;
};

module.exports = { apiResponse, isBlank };
