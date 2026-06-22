import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

print("GEMINI_API_KEY exists:", bool(os.getenv("GEMINI_API_KEY")))

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel("gemini-2.5-flash")