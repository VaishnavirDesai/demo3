<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

        <form action="" method="post">
        <label htmlFor="name" class="form-label">Fullname</label>
            <input type="text" class="form-control" id="name" />

        <label htmlFor="mobile" class="form-label">Mobile no:</label>
            <input type="number" class="form-control" id="mobile" />

            <label htmlFor="mobile" class="form-label">Mobile no:</label>
            <input type="number" class="form-control" id="mobile" />

            <label htmlFor="email" class="form-label">Email Id</label>
            <input type="email" class="form-control" id="email" />


            <label htmlFor="address" class="form-label">Address </label>
            <input type="text" class="form-control" id="address" placeholder="Apartment, studio, or floor" />

            <div class="col-md-6">
              <label htmlFor="city" class="form-label">City</label>
              <input type="text" class="form-control" id="city" />
            </div>
            <div class="col-md-2">
              <label htmlFor="zip" class="form-label">Pin code</label>
              <input type="text" class="form-control" id="zip" />
            </div>

            <label htmlFor="message" class="form-label">Message</label>
            <textarea class="form-control" id="message" rows="3"></textarea>

            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" htmlFor="gridCheck">
                Check me out
              </label>
            </div>

            <div class="col-12">
              <button type="submit" class="btn Z53">Submit</button>
            </div>
          </form>
</body>
</html>