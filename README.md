# Saveit
Saveit is a budgetting app that utilizes [Dave Ramsey's](https://www.daveramsey.com/blog/envelope-system-explained) envelope system. The envelope system is a way to track exactly how much money you have in each budget category for the month by keeping your cash tucked away in envelopes.
# Motivation
I have some friends living paycheck to paycheck. Most of us aren't really taught how to budget in school, so I created this app to not only showcase my abilities as a Junior Developer but also to help them get started with budgeting.
# Features
- Ability to create “envelopes”. 
- Add receipts to envelopes. 
- Use the OCR API to pull information from the receipts. 
- Receive weekly summaries, on how much you saved (or didn't save), using Twilio. 
- See tips on how to get started with budgeting, and chat with other users to share budgeting tips.
# API Reference
This app uses [Twilio](https://www.twilio.com/docs) to send out the weekly reminders. It also utilizes [Taggun](https://www.taggun.io/) to convert the image of a receipt to raw text and pull information from that.
## License
[MIT](https://choosealicense.com/licenses/mit/)
