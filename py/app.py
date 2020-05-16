import time

from flask import Flask
from datetime import datetime

TIMEOUT = 5
app = Flask(__name__)

@app.route("/")
def ping():
  return "python - ping\n"

@app.route("/timeout")
def timeout():
  time.sleep(TIMEOUT)
  return "python - timeout\n"

@app.route("/heavy")
def heavy():
  start = datetime.now()
  while True:
    now = datetime.now()
    if (now - start).total_seconds() >= TIMEOUT:
      break
  return "python - heavy\n"

if (__name__ == "__main__"):
  app.run()