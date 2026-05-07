FROM python:3.11-slim
WORKDIR /app
COPY . .

RUN pip install fastapi uvicorn pymongo starlette

CMD ["python","-m","uvicorn","reviewsservice:app","--host","0.0.0.0","--port","5009"]