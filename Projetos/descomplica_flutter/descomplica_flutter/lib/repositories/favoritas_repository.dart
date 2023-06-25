import 'package:flutter/material.dart';

class FavoritasRepository extends ChangeNotifier {
  List<Moeda> _lista = [];

  UnmodifiableListView<Moeda> get list => UnmodifiableListView(_lista);
}
