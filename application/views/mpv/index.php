<div class="modal" id="staticBackdrop" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Objek GeoCoding</h5>
        
      </div>
      <div class="modal-body">
          <input class="form-control" id="nama" />
          <br />
          <input class="form-control" id="jumlah" />
          <br />
          <textarea class="form-control" id="tampil_data"></textarea>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-success" id="save">Save Data</button>
      </div>
    </div>
  </div>
</div>

<div id="mapsid">
    
</div>

<div id="refreshButton" class="col-md-6 mx-auto">
    <table class="table">
        <thead>
            <th colspan="3" class="text-center">
                Layer
            </th>
        </thead>
        
        <tbody>
            <tr>
                <td> <button id="poly_line" class="btn btn-primary">Polyline</button></td>
            </tr>
            
            <tr>
                <td> <button id="poly_gon" class="btn btn-primary">Polygon</button></td>
            </tr>
           
            <tr>
                <td><button id="rect_angle" class="btn btn-primary">Rectangle</button></td>
            </tr>
            
            <tr>
                <td><button id="geo_check" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Cek GeoCoding</button></td>
            </tr>
        </tbody>
    </table>
</div>

<script type="text/javascript">
   
</script>