import 'dart:html';

import 'package:flutter/material.dart';

class Home2Page extends StatefulWidget {
  _Home2PageState createState() => _Home2PageState();
}

class _Home2PageState extends State<Home2Page> {
  String nome = 'Samuel Cristian';
  _Home2PageState() {
    print('_Home2PageState constructor');
  }

  @override
  void initState() {
    super.initState();
    nome = '';
    Future.delayed(Duration(seconds: 2), () {
      setState(() {
        nome = 'Samuel Cristian';
      });
    });
  }

  @override
  void didChangeDependencies() {
    print('_Home2PageState initState');
    super.didChangeDependencies();
  }

  @override
  Widget build(BuildContext context) {
    print('_Home2PageState build');
    return Scaffold(
      appBar: AppBar(
        title: Text(nome),
      ),
      body: Column(
        children: [
          Text('Estado alterando'),
          FlatButton(
            onPressed: () {
              setState(() {
                nome:
                'Alterando para The Simpsons StateFul';
              });
            },
            child: Text('Alterando nome'),
          ),
        ],
      ),
    );
  }
}
