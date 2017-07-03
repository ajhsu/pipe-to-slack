# pipe-to-telegram

Pipe any command line output to a telegram bot.

> ***This project is forked from [clarkie/pipe-to-slack](https://github.com/clarkie/pipe-to-slack) but altered to telegram bot as an endpoint.***

## Configuration

You'll need to create a `.p2t` file in your home directory (e.g. `~/.p2t`). In here you'll need to add your Telegram Bot Token:

```
token=[BOT_API_TOKEN]
chatId=[USER_CHAT_ID]
```

 > note: You can find your chat id via [@get_id_bot](https://telegram.me/get_id_bot). ([Source](https://stackoverflow.com/a/37396871/3917353))

## Usage

All you need to do is pipe the command into `p2t`.

```
<command> | p2t
```