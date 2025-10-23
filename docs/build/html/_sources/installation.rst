Installation
============

Requirements
------------

lightgraph requires the following dependencies:

* Python >= 3.6
* numpy
* IPython

Installation Methods
--------------------

PyPI Installation
~~~~~~~~~~~~~~~~~

The easiest way to install lightgraph is using pip:

.. code-block:: bash

   pip install lightgraph

Development Installation
~~~~~~~~~~~~~~~~~~~~~~~~

To install the development version from source:

.. code-block:: bash

   git clone https://github.com/haozhu233/lightgraph.git
   cd lightgraph/python
   pip install -e .

Verification
------------

To verify your installation, run the following in a Python environment:

.. code-block:: python

   import lightgraph
   print(lightgraph.__version__)

If the installation was successful, this should print the version number without any errors.
