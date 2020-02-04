from twilio.rest import Client

client = Client("ACCOUNT SID", "ACCOUNT TOKEN")

msg = client.messages.create(
    to="PHONE NUMBER",
    from_="TWILIO NUMBER",
    body="Hello from python",

)

print(f"Created a new message: {msg.sid}")