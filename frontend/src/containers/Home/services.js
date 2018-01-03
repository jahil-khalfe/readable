import { config } from '../../../package.json';

const getData = (param) =>
  fetch(`${config.api}/${param}`, {
    method: 'GET',
    headers: { 'Authorization': config.authorization },
  });

export const updateComment = comment =>
  fetch(`${config.api}/comments/${comment.id}`, {
    method: 'PUT',
    headers: { 'Authorization': config.authorization },
    body: comment
  });

export const addComment = comment =>
  fetch(`${config.api}/comments/${comment.id}`, {
    method: 'POST',
    headers: { 'Authorization': config.authorization },
    body: comment
  });

export const upVoteComment = comment =>
  fetch(`${config.api}/comments/${comment.id}`, {
    method: 'POST',
    headers: {
      'Authorization': config.authorization,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ option: "upVote" })
  });

export const downVoteComment = comment =>
  fetch(`${config.api}/comments/${comment.id}`, {
    method: 'POST',
    headers: {
      'Authorization': config.authorization,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ option: "downVote" })
  });

export const deleteComment = comment =>
  fetch(`${config.api}/comments/${comment.id}`, {
    method: 'DELETE',
    headers: { 'Authorization': config.authorization },
  });

export default getData;