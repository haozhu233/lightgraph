Contributing
============

We welcome contributions to lightgraph! This page provides guidelines for contributing to the project.

Getting Started
---------------

1. Fork the repository on GitHub
2. Clone your fork locally
3. Create a new branch for your feature or bugfix
4. Make your changes
5. Test your changes
6. Submit a pull request

Development Setup
-----------------

To set up a development environment:

.. code-block:: bash

   git clone https://github.com/haozhu233/lightgraph.git
   cd lightgraph/python
   pip install -e .

For documentation development:

.. code-block:: bash

   cd docs
   pip install -r requirements.txt
   make html

Code Style
----------

Please follow these guidelines:

* Use Python 3.6+ compatible code
* Follow PEP 8 style guidelines
* Add docstrings to new functions
* Include type hints where appropriate
* Write tests for new functionality

Testing
-------

Before submitting a pull request:

1. Run existing tests to ensure nothing is broken
2. Add tests for new functionality
3. Ensure all tests pass

Documentation
-------------

When adding new features:

1. Update the API documentation
2. Add examples to the examples page
3. Update the tutorial if needed
4. Ensure the documentation builds without errors

Reporting Issues
----------------

When reporting issues, please include:

* Python version
* Operating system
* Steps to reproduce the issue
* Expected vs actual behavior
* Any error messages

Feature Requests
----------------

For feature requests, please:

* Describe the use case
* Explain why it would be valuable
* Consider if it fits the project's scope
* Be willing to contribute to implementation

Pull Request Process
--------------------

1. Ensure your code follows the style guidelines
2. Add appropriate tests
3. Update documentation
4. Write a clear description of your changes
5. Reference any related issues

License
-------

By contributing to lightgraph, you agree that your contributions will be licensed under the MIT License.
