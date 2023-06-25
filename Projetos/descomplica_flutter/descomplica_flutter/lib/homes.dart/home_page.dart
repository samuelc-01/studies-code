import 'dart:io';

import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  String nome = 'Samuel Cristian';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          nome,
          style: TextStyle(
            color: Colors.white,
            fontSize: 30,
          ),
        ),
        actions: [
          Center(
            child: Text('X'),
          ),
          Center(
            child: Text('Y'),
          )
        ],
      ),
      drawer: Drawer(),
      body: Container(
        width: 400,
        height: 400,
        color: Colors.green,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          crossAxisAlignment: CrossAxisAlignment.end,
          children: [
            Center(
                child: FlatButton(
              onPressed: () {
                nome = 'Teste 213';
              },
              child: Text('Button'),
            )),
            Text('Teste2'),
            SizedBox(
              height: 50,
            ),
            Text('Teste3'),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('Teste Row'),
                Text('Teste Row'),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
