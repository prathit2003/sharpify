import boto3
import uuid
import os
from botocore.exceptions import BotoCoreError, NoCredentialsError
from fastapi import HTTPException
from dotenv import load_dotenv

load_dotenv()

AWS_BUCKET_NAME = os.getenv("AWS_BUCKET_NAME")
AWS_REGION = os.getenv("AWS_REGION")
FOLDER = os.getenv("FOLDER")
s3_client = boto3.client(
    "s3",
    region_name=AWS_REGION,
    aws_access_key_id=os.getenv("AWS_ACCESS_KEY_ID"),
    aws_secret_access_key=os.getenv("AWS_SECRET_ACCESS_KEY")
)

def upload_to_s3(file_bytes: bytes, format: str) -> str:
    try:
        ext = format.lower()
        unique_filename = f"{FOLDER}/{uuid.uuid4()}.{ext}"

        content_types = {
            "jpg": "image/jpeg",
            "jpeg": "image/jpeg",
            "png": "image/png",
            "webp": "image/webp"
        }
        content_type = content_types.get(ext, "application/octet-stream")

        
        s3_client.put_object(
            Bucket=AWS_BUCKET_NAME,
            Key=unique_filename,
            Body=file_bytes,
            ContentType=content_type
        )

        presigned_url = s3_client.generate_presigned_url(
            "get_object",
            Params={"Bucket": AWS_BUCKET_NAME, "Key": unique_filename},
            ExpiresIn=3600 
        )

        return presigned_url

    except (BotoCoreError, NoCredentialsError) as e:
        raise HTTPException(status_code=500, detail=f"S3 upload failed: {str(e)}")
