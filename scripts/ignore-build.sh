#!/bin/bash

# Ekstraksi daftar semua berkas yang mengalami perubahan pada commit terakhir
CHANGED_FILES=$(git diff HEAD^ HEAD --name-only)

# Memfilter perubahan, menyisakan hanya berkas yang BUKAN merupakan dokumentasi sepele
# Tambahkan nama berkas atau direktori lain di dalam kurung jika diperlukan
ESSENTIAL_CHANGES=$(echo "$CHANGED_FILES" | grep -vE '^(README\.md|LICENSE|\.gitignore|Architecture\.md|TODOs\.md)$')

# Evaluasi Kondisi
if [ -z "$ESSENTIAL_CHANGES" ]; then
  echo "=> DETEKSI: Perubahan murni administratif (README/LICENSE). Build dibatalkan."
  exit 0
else
  echo "=> DETEKSI: Perubahan kode inti, versi, atau konten CMS. Build dilanjutkan."
  exit 1
fi