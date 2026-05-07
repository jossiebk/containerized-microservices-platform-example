FROM python:3.11-slim
WORKDIR /app
COPY . .

RUN pip install uvicorn fastapi starlette

CMD ["python","main.py"]