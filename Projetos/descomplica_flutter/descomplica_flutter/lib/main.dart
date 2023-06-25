import 'package:descomplica_flutter/home_botoes.dart';
import 'package:flutter/material.dart';

import 'homes.dart/home_page.dart';
import 'homes.dart/home2_page.dart';
import 'paginas/produtos_page.dart';
import 'paginas/categorias_page.dart';

void main() {
  runApp(
    MaterialApp(
      home: HomeBotoes(),
      routes: {
        '/produtos': (_) => ProdutosPage(),
        '/categorias': (_) => CategoriasPage()
      },
    ),
  );
}
