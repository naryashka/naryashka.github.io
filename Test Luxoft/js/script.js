function newForm(id, config) {
    var _self = this;
    _self.init = function() {
        _self.form = document.getElementById(id);
        _self.action = config.action;
        // events
        _self.form.addEventListener("submit", _self.submit);
        _self.textInputs = document.getElementsByTagName('input');
        for (var i = 0; i < _self.textInputs.length; i++) {
            if (_self.hasClass(_self.textInputs[i], 'form-control')) {
                _self.textInputs[i].addEventListener('keydown', _self.checkInput);
            }
        }
        document.getElementsByClassName('radio')[0].addEventListener('click', _self.resetRadios);
    }
    _self.submit = function(event) {
        event.preventDefault();
        if (!_self.checkRequired()) {
            return false;
        }
        _self.action.submit(_self);
    }
    _self.checkRequired = function() {
        var errors = 0;
        //check text fields
        var fields = document.getElementsByClassName('field-required');
        for (var i = 0; i < fields.length; i++) {
            if (fields[i].value === '') {
                _self.findParent(fields[i], 'form-group').className += ' has-error has-feedback';
                errors = 1;
            }
        }
        // check radio
        var radio = document.getElementsByClassName('radio-required')[0];
        var radioInput = radio.getElementsByTagName('input');
        var isChecked = 0;
        for (var i = 0; i < radioInput.length; i++) {
            if (radioInput[i].checked) {
                isChecked = 1;
            }
        }
        if (isChecked < 1) {
            _self.findParent(radio, 'form-group').className += ' has-error has-feedback';
            return false;
        }
        if (errors > 0) {
            return false;
        }
        return true;
    }
    _self.checkInput = function(event) {
        var element = this;
        _self.resets(element);
        if (_self.hasClass(element, 'field-text')) {
            var regex = new RegExp("^[a-zA-Z ]+$");
        } else if (_self.hasClass(element, 'field-num')) {
            var regex = new RegExp("^[0-9\+]+$");
        }
        var keyCode = !event.charCode ? event.which : event.charCode;
        var key = String.fromCharCode(keyCode);
        if (keyCode === 8 || keyCode === 46) {
            return false;
        }
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
        return;
    }
    _self.resets = function(element) {
        _self.removeRequires(element);
    }
    _self.removeRequires = function(element) {
        _self.removeClass(_self.findParent(element, 'form-group'), 'has-error');
        _self.removeClass(_self.findParent(element, 'form-group'), 'has-feedback');
    }
    _self.resetRadios = function(event) {
        var element = this;
        _self.removeRequires(element);
    }
    _self.removeClass = function(element, cls) {
        var newClassName = "";
        var i;
        var classes = element.className.split(" ");
        for (i = 0; i < classes.length; i++) {
            if (classes[i] !== cls) {
                newClassName += classes[i] + " ";
            }
        }
        element.className = newClassName;
    }
    _self.hasClass = function(element, cls) {
        return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }
    _self.findParent = function(element, cls) {
        while ((element = element.parentElement) && !element.classList.contains(cls));
        return element;
    }
    _self.init();
}

function doForm(config) {
    var _self = this;
    _self.init = function() {
        _self.table = document.getElementById('records');
        _self.sortEvents();
    };
    _self.collectData = function() {
        _self.formData = [];
        _self.getAllFields();
        for (item in _self.formFields) {
            _self.formData[_self.formFields[item].name] = _self.formFields[item].value;
        }
        console.log(_self.formData);
    };
    _self.submit = function(formObject) {
        _self.formObject = formObject;
        _self.form = formObject.form;
        _self.collectData();
        _self.insertRow();
        _self.resetFields();
    };
    _self.insertRow = function() {
        var tbody = _self.table.getElementsByTagName('tbody')[0];
        var data = _self.formData;
        tbody.innerHTML += '<tr>' +
            '<td>' + data['first_name'] + '</td>' +
            '<td>' + data['last_name'] + '</td>' +
            '<td>' + data['phone'] + '</td>' +
            '<td>' + data['gender'] + '</td>' +
            '<td>' + data['age'] + '</td>' +
            '<td>' + '<a onclick="this.parentElement.parentElement.remove()" href="#"><img src="img/del.png" alt="delete" /></a>' + '</td>' +
            '</tr>';

    }
    _self.getAllFields = function() {
        _self.formFields = [];
        var fields = _self.form.getElementsByClassName('form-control');
        for (var i = 0; i < fields.length; i++) {
            _self.formFields['' + fields[i].name + ''] = fields[i];
        }
        var radios = _self.form.getElementsByClassName('form-radio');
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                _self.formFields['' + radios[i].name + ''] = radios[i];
            }
        }
    }
    _self.resetFields = function() {
            _self.getAllFields();
            for (item in _self.formFields) {
                if (_self.formFields[item].type !== 'radio') {
                    _self.formFields[item].value = '';
                }
            }
        }
        //sort
    _self.sortEvents = function() {
        _self.table.addEventListener('click', _self.sortColumn);
    }
    _self.sortColumn = function(e) {

        if (e.target.tagName != 'TH') return;
        var th = _self.table.getElementsByTagName('th');
        for (var i = 0; i < th.length; i++) {
            _self.formObject.removeClass(th[i], 'danger');
        }
        e.target.className += 'danger';
        _self.sortGrid(e.target.cellIndex, e.target.getAttribute('data-type'));
    }

    _self.sortGrid = function(colNum, type) {
        var grid = _self.table;
        var tbody = grid.getElementsByTagName('tbody')[0];
        var rowsArray = [].slice.call(tbody.rows);
        var compare;
        switch (type) {
            case 'number':
                compare = function(rowA, rowB) {
                    return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
                };
                break;
            case 'string':
                compare = function(rowA, rowB) {
                    return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
                };
                break;
        }
        rowsArray.sort(compare);
        grid.removeChild(tbody);
        for (var i = 0; i < rowsArray.length; i++) {
            tbody.appendChild(rowsArray[i]);
        }
        grid.appendChild(tbody);
    }
    _self.init();

}
