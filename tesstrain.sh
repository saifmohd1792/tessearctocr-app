#!/bin/bash

# Set paths to Tesseract and Tesstrain directories
TESSERACT_DIR="path/to/tesseract"
TESSTRAIN_DIR="path/to/tesstrain"

# Set paths to necessary directories and files
FONTS_DIR="path/to/fonts"
LANGDATA_DIR="path/to/langdata"
TESSDATA_DIR="path/to/tessdata"
OUTPUT_DIR="path/to/output"
TRAINING_TEXT="path/to/training_text"
WORDLIST="path/to/wordlist"

# Run Tesstrain with specified parameters
${TESSTRAIN_DIR}/tesstrain.sh \
  --fonts_dir ${FONTS_DIR} \
  --lang ${LANG} \
  --linedata_only \
  --noextract_font_properties \
  --langdata_dir ${LANGDATA_DIR} \
  --tessdata_dir ${TESSDATA_DIR} \
  --output_dir ${OUTPUT_DIR} \
  --training_text ${TRAINING_TEXT} \
  --wordlist ${WORDLIST} \
  --iterations ${ITERATIONS} \
  --exposures ${EXPOSURES} \
  --maxpages 0
