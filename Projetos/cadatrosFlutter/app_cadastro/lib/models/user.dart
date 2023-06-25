// ignore_for_file: public_member_api_docs, sort_constructors_first
import 'package:flutter/material.dart';

class User {
  final String? id;
  final String name;
  final String email;
  final String avatarUrl;

  const User({
    this.id,
    required this.name,
    required this.email,
    required this.avatarUrl,
  });
}
