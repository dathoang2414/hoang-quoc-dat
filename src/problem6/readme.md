# Scoreboard API Specification

This document specifies the API service for a real-time scoreboard system.

## Overview

The scoreboard system allows users to accumulate scores by performing specific actions. The system should:

1. Maintain a top 10 scoreboard.
2. Support real-time updates for the scoreboard.
3. Securely update user scores via API requests.
4. Prevent unauthorized score manipulation.

## API Endpoints

### 1. Submit Score Update

**POST** `/api/scores/update`

#### Request Body:

```json
{
  "userId": "12345",
  "scoreDelta": 10,
  "authToken": "user-auth-token"
}
```

#### Response:

```json
{
  "success": true,
  "newScore": 150
}
```

#### Notes:

- The `authToken` is required for authorization.
- `scoreDelta` represents the increment to the user’s score.

---

### 2. Get Top 10 Scores

**GET** `/api/scores/top`

#### Response:

```json
{
  "scores": [
    { "userId": "12345", "score": 200 },
    { "userId": "67890", "score": 180 }
  ]
}
```

#### Notes:

- Returns the top 10 users with the highest scores.
- This endpoint is optimized for frequent calls.

---

### 3. Get User Score

**GET** `/api/scores/:userId`

#### Response:

```json
{
  "userId": "12345",
  "score": 150
}
```

#### Notes:

- Allows users to check their current score.

## Security Considerations

1. **Authentication & Authorization:**
   - Use JWT tokens for API authentication.
   - Validate `authToken` on every request.
2. **Rate Limiting:**
   - Implement rate limiting to prevent abuse.
3. **Server-Side Validation:**
   - Validate all incoming `scoreDelta` values to prevent negative or excessive increases.

## Suggested Improvements

### Additional Comments:

- Implement **WebSocket or SSE (Server-Sent Events)** for real-time scoreboard updates instead of polling.
- Utilize **Redis caching** to store the top 10 scores, reducing database queries.
- Introduce **role-based access control (RBAC)** to manage API access permissions.
- Add **audit logging** to track changes in scores for debugging and fraud detection.

### Future Enhancements:

- Extend leaderboard to support different game modes.
- Introduce seasonal or time-based ranking resets.
- Optimize data structure for high-concurrency environments.
- Implement WebSocket for real-time scoreboard updates.
- Cache top 10 scores to reduce database load.
- Add logging and monitoring for suspicious activity.

## Execution Flow Diagram

### Diagram:

Below is a sequence diagram illustrating the API request flow:

```plaintext
 User                       API Server               Database
  |                            |                        |
  | --(POST /scores/update)--> |                        |
  |                            |  --(Validate Token)--> |
  |                            | <--(Token Validated)-- |
  |                            | --(Update Score)-->    |
  |                            | <--(Score Updated)--   |
  | <--(Response)------------- |                        |
```

This diagram represents the flow from a user action to score update and response.
(Include a sequence diagram illustrating the API request flow)

---

## License

### Implementation Notes:

This specification will be provided to the backend engineering team for implementation. The team should follow security best practices and ensure scalability for high traffic scenarios.
This project is open-source and available under the MIT license.
