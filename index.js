#!/usr/bin/env node
'use strict';

const stdin = process.openStdin();
const telegram = require('./telegram');
const config = require('home-config').load('.p2t');
const token = config.token;
const chatId = config.chatId;

if (token && chatId) {
  stdin.on('data', chunk => {
    telegram.sendMessage(chunk.toString('utf8'), chatId, token);
  });
  stdin.on('end', () => {
    console.log('PIPE TO SLACK COMPLETED');
  });
}
